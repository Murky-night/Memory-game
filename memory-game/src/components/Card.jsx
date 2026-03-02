export const Card = ({ card, onClick }) => {
  return (
    <div className="card">
      <div className="card-back">{card}</div>
    </div>
  );
};