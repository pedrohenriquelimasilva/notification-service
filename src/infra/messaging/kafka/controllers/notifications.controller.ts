import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  recipientId: string;
  category: string;
}

@Controller()
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}
  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { category, content, recipientId }: SendNotificationPayload,
  ) {
    await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });
  }
}
