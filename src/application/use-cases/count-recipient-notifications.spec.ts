import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();

    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient1-id' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id',
    });

    expect(count).toEqual(2);
  });
});
