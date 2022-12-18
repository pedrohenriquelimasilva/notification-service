import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repositores';
import { NotificationNotFound } from './error/notification-not-found';

interface UnreadNotificationsRequest {
  notificationId: string;
}

type UnreadNotificationsResponse = void;

@Injectable()
export class UnreadNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: UnreadNotificationsRequest,
  ): Promise<UnreadNotificationsResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unRead();

    await this.notificationRepository.save(notification);
  }
}
