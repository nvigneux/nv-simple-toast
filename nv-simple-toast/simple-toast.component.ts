import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'

import { NvSimpleToast } from './shared/simple-toast.service'
import { Toast } from './shared/toast.model'

@Component({
  selector: 'nv-simple-toast',
  templateUrl: './simple-toast.component.html',
  styleUrls: ['./simple-toast.component.scss']
})
export class NvSimpleToastComponent implements OnInit, OnDestroy {
  subToasts: Subscription
  toasts: Toast[]
  constructor(private nvSimpleToast: NvSimpleToast) {}

  ngOnInit() {
    this.subToasts = this.nvSimpleToast.getToasts().subscribe(toasts => {
      this.toasts = toasts
    })
  }

  removeToast(toast: Toast) {
    this.nvSimpleToast.removeToast(toast)
  }

  ngOnDestroy() {
    this.subToasts.unsubscribe()
  }
}
