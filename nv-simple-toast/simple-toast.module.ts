import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NvSimpleToastComponent } from './simple-toast.component'
import { NvSimpleToast } from './shared/simple-toast.service'

@NgModule({
  declarations: [NvSimpleToastComponent],
  imports: [CommonModule],
  exports: [NvSimpleToastComponent],
  providers: [NvSimpleToast]
})
export class NvSimpleToastModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NvSimpleToastModule,
      providers: [NvSimpleToast]
    }
  }
}
