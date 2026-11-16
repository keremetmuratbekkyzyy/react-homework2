import { Avatar, Card, Tag } from 'antd';

export const UserCard = ({ user }) => {
  return (
    <Card className="user-card" hoverable>
      <Avatar
        className="user-avatar"
        size={104}
        src={user.img}
        alt={user.name}
      >
        {user.emoji}
      </Avatar>

      <h2>{user.name}</h2>
      <p className="cartoon-name">{user.cartoon}</p>
      <p>Возраст: {user.age}</p>
      <p>Город: {user.city}</p>

      {user.Active === true ? (
        <Tag color="green">Активен</Tag>
      ) : (
        <Tag color="red">Неактивен</Tag>
      )}
    </Card>
  );
};
