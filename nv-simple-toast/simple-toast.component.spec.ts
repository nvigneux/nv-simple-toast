import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NvSimpleToastComponent } from './simple-toast.component'

describe('NvSimpleToastComponent', () => {
  let component: NvSimpleToastComponent
  let fixture: ComponentFixture<NvSimpleToastComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NvSimpleToastComponent]
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSimpleToastComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
