import ProfileCard from './component/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ณัฐภูมิ เนืองเนตร', nickname: 'ภูมิ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 1, name: 'ปวรภพ ตันไพบูลย์', nickname: 'ภพ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เกม', 'หนัง'] },
  { id: 1, name: 'อธิชา กิจเจริญ', nickname: 'แอนนี่',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['อาเซ่นอล', 'F1'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;