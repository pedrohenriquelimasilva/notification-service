import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type OverrideProps = Partial<NotificationProps>;

export function makeNotification(overrad: OverrideProps = {}) {
  return new Notification({
    category: 'Social',
    content: new Content('Nova solicitação'),
    recipientId: 'recipient-id',
    ...overrad,
  });
}
