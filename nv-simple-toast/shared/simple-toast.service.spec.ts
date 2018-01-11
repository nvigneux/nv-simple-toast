import { TestBed, inject } from '@angular/core/testing'

import { NvSimpleToast } from './simple-toast.service'

describe('NvSimpleToast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NvSimpleToast]
    })
  })

  it(
    'should be created',
    inject([NvSimpleToast], (service: NvSimpleToast) => {
      expect(service).toBeTruthy()
    })
  )
})
