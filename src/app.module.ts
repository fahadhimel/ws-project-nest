import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events.gateway';

@Module({
  imports: [EventsGateway],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
