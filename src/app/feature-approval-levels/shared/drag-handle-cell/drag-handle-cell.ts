import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDragHandle } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-drag-handle-cell',
  imports: [
    CdkDragHandle
  ],
  template: ` <button class="btn" cdkDragHandle>🟰</button> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragHandleCell {

}
