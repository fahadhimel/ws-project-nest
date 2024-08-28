import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { gatewayModule } from './gateway/gateway.module';

@Module({
  imports: [gatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
