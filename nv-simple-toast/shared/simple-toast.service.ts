import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { Toast } from './toast.model'

@Injectable()
export class NvSimpleToast {
  private timerToast = {}
  private toasts: Toast[] = []
  private subToast = new Subject<any>()

  getToasts(): Observable<Toast[]> {
    return this.subToast.asObservable()
  }

  /**
   * add toast to toasts and create a timeout to delete him
   * @param toast : Toast
   * @param time : number
   */
  addToast(toast: Toast, time: number = 5000): void {
    this.toasts = [Object.assign({}, { id: this.generateId() }, toast), ...this.toasts]
    this.subToast.next(this.toasts)
    this.createTimeOut(this.toasts[0], time)
    if (this.toasts.length > 3) {
      this.removeToast(this.toasts[this.toasts.length - 1])
    }
  }

  /**
   * remove the toast by his id and clear his timeout from memory
   * @param toast : Toast
   */
  removeToast(toast: Toast): void {
    this.toasts = this.toasts.filter(item => item.id !== toast.id)
    this.subToast.next(this.toasts)
    clearTimeout(this.timerToast[toast.id])
  }

  /**
   * Delete all toast from array
   */
  clearToast(): void {
    this.toasts = []
    this.subToast.next()
  }

  /**
   * Create a timeout to delete the toast in limit time
   * @param toast : Toast
   * @param time : number
   */
  private createTimeOut(toast: Toast, time: number) {
    this.timerToast[toast.id] = setTimeout(() => this.removeToast(toast), time)
  }

  /**
   * Generate a generic ID
   */
  private generateId(): string {
    return Math.random()
      .toString(36)
      .substr(2, 9)
  }
}
