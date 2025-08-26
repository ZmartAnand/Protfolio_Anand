import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {

  FormsModule,
  NgForm,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  toastMessage: string | null = null;
  sending = false;

  sendEmail(form: NgForm) {
    if (form.valid) {
      this.sending = true;

      emailjs
        .send(
          'service_sj48wqa',
          'template_pnop2md',
          {
            from_name: form.value.from_name,
            reply_to: form.value.reply_to,
            subject: form.value.subject,
            message: form.value.message,
          },
          'ZaCGJ9Q4wmoMm2MBg'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.showToast(' Your message has been sent successfully!');
            form.reset();
          },
          (err) => {
            console.error('FAILED...', err);
            this.showToast('Failed to send message. Please try again.');
          }
        )
        .finally(() => {
          this.sending = false;
        });
    }
  }

  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;
    }, 4000); // hide after 4 seconds
  }
}
