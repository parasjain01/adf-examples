import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdfModule } from '../adf.module';
import { StartProcessComponent } from './start-process.component';
import { AlfrescoApiServiceMock, AlfrescoApiService } from '@alfresco/adf-core';

describe('StartProcessComponent', () => {
  let component: StartProcessComponent;
  let fixture: ComponentFixture<StartProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        AdfModule
      ],
      declarations: [StartProcessComponent],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
