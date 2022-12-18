import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repositores';
import { NotificationNotFound } from './error/notification-not-found';

interface ReadNotificationsRequest {
  notificationId: string;
}

type ReadNotificationsResponse = void;

@Injectable()
export class ReadNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ReadNotificationsRequest,
  ): Promise<ReadNotificationsResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationRepository.save(notification);
  }
}
