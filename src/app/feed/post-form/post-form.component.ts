import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngsocial-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  postForm = this.formBuilder.group({
    text: ['', [Validators.required]],
  });

  @Output() save = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder) {}

  savePost(): void {
    const { text } = this.postForm.value;

    if (text) {
      this.save.emit(text);
    }
  }

  deletePost(): void {
    const { text } = this.postForm.value;
    if (text) {
      this.delete.emit(text);
    }
  }
}
