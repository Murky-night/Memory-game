export const GameHeader = ({score,moves}) => {
    return (
        <div className="game-header">
        <h1>🎮 Memory card game</h1>
        <div className="stats">
          <div className="stat-item">
            <div className="stat-label">Score: </div>
            <div className="stat-value">{score}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Moves: </div>
            <div className="stat-value">{moves}</div>   
          </div>
        </div>
      </div>
    );
};