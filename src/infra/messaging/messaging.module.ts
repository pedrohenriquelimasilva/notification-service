import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  controllers: [NotificationController],
  providers: [KafkaConsumerService, SendNotification],
  imports: [DatabaseModule],
})
export class MessageService {}
