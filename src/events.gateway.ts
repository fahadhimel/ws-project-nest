import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';

@WebSocketGateway({ cors: true })
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  webSocketServer;

  handleDisconnect(client: any) {
    client.emit('disconnect', 'successfully disconnect');
  }
  handleConnection(client: any) {
    client.emit('connect', 'successfully connect');
  }

  @SubscribeMessage('new-event')
  async handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): Promise<string> {
    client.emit('another-new-event', data);
    return data;
  }
}
