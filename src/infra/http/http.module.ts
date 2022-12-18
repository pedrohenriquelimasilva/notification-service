import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notifications.controller';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotifications } from '@application/use-cases/read-notification';
import { UnreadNotifications } from '@application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    SendNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    CancelNotification,
    ReadNotifications,
    UnreadNotifications,
  ],
})
export class HTTPModule {}
