import { MessageService } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HTTPModule } from './infra/http/http.module';

@Module({
  imports: [HTTPModule, DatabaseModule, MessageService],
})
export class AppModule {}
