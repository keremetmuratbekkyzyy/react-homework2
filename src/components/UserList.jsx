import { UserCard } from './UserCard.jsx';

export const UserList = () => {
  const users = [
    {
      id: 1,
      name: 'Наруто',
      age: 17,
      city: 'Талас',
      Active: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx79YbcMFwoK7Hy25weqhSLOsC_8JOSPSKqbrve1nniBL1HSeB7iY4miQ&s=10',
      emoji: '🥷',
      cartoon: 'Naruto',
    },
    {
      id: 2,
      name: 'Эльза',
      age: 21,
      city: 'Каракол',
      Active: true,
      img: 'https://tengrinews.kz/userdata/news/2014/news_264615/thumb_m/photo_140317.jpg',
      emoji: '❄️',
      cartoon: 'Frozen',
    },
    {
      id: 3,
      name: 'Шрек',
      age: 30,
      city: 'Ош',
      Active: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2n_xXL9kFvaQPdfsxRJaWLgnEiRJoY8yy7O4WK1EbLlL0Jyp1yzo8MQ&s=10',
      emoji: '🧌',
      cartoon: 'Shrek',
    },
    {
      id: 4,
      name: 'Губка Боб',
      age: 20,
      city: 'Чолпон-Ата',
      Active: true,
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/SpongeBob_SquarePants_character.png',
      emoji: '🧽',
      cartoon: 'SpongeBob SquarePants',
    },
    {
      id: 5,
      name: 'Пикачу',
      age: 10,
      city: 'Талас',
      Active: true,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      emoji: '⚡',
      cartoon: 'Pokémon',
    },
    {
      id: 6,
      name: 'По',
      age: 25,
      city: 'Нарын',
      Active: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2JHmi9xFCnVtN-FBL8eOEDsmR4kRMbDCaPOKbOQ4aA&s=10',
      emoji: '🐼',
      cartoon: 'Kung Fu Panda',
    },
    {
      id: 7,
      name: 'Симба',
      age: 18,
      city: 'Джалал-Абад',
      Active: true,
      img: 'https://citaty.info/files/characters/152195.jpg',
      emoji: '🦁',
      cartoon: 'The Lion King',
    },
    {
      id: 8,
      name: 'Микки Маус',
      age: 25,
      city: 'Баткен',
      Active: false,
      img: 'https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-2nhm-p-kartinki-mikki-maus-na-prozrachnom-fone-1.png',
      emoji: '🐭',
      cartoon: 'Mickey Mouse',
    },
    {
      id: 9,
      name: 'Стич',
      age: 8,
      city: 'Токмок',
      Active: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmpvpURHoohKFi12i1XeqhcWa8YG4ewup4IxTpiwMs3typO3_RfMGwExs&s=10',
      emoji: '👽',
      cartoon: 'Lilo & Stitch',
    },
  ];

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
