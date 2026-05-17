export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#F7E6D4',
        padding: 20,
        paddingBottom: 120,
        fontFamily: 'sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: '#4B3535',
          marginBottom: 24,
        }}
      >
        Hi Alana 👋
      </h1>

      <div
        style={{
          background: '#FFF8F2',
          borderRadius: 30,
          padding: 20,
          marginBottom: 24,
        }}
      >
        <textarea
          placeholder="What's on your mind?"
          style={{
            width: '100%',
            border: 'none',
            background: 'transparent',
            outline: 'none',
            resize: 'none',
            fontSize: 16,
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 20,
            fontSize: 24,
          }}
        >
          <span>📎</span>
          <span>⏰</span>
          <span>🏷️</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 14,
          overflowX: 'auto',
          marginBottom: 24,
        }}
      >
        {[
          ['🚀', 'Junior'],
          ['💼', 'Work'],
          ['🏋️', 'Gym'],
          ['💡', 'Ideas'],
        ].map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: 90,
              height: 90,
              background: '#E7C58A',
              borderRadius: 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: 30 }}>
              {item[0]}
            </div>

            <div
              style={{
                marginTop: 6,
                fontWeight: 600,
                color: '#4B3535',
              }}
            >
              {item[1]}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 24,
        }}
      >
        {['Status', 'Category', 'Date'].map(
          (item, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                padding: '10px 16px',
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          )
        )}
      </div>

      <h2
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#4B3535',
          marginBottom: 16,
        }}
      >
        Timeline
      </h2>

      {[
        {
          emoji: '🚀',
          title:
            'Export client excel before 3PM',
          status: 'Ongoing',
          time: '2h ago',
        },

        {
          emoji: '💼',
          title: 'Need revise invoice design',
          status: 'Pending',
          time: '5h ago',
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: '#FFF8F2',
            borderRadius: 30,
            padding: 20,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              color: '#4B3535',
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            {item.emoji} {item.title}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                color: '#86B05D',
                fontWeight: 600,
              }}
            >
              {item.status}
            </span>

            <span style={{ color: '#7A6A6A' }}>
              {item.time}
            </span>
          </div>
        </div>
      ))}

      <h2
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#4B3535',
          marginTop: 32,
          marginBottom: 16,
        }}
      >
        Upcoming Thoughts
      </h2>

      <div
        style={{
          background: '#E7C58A',
          borderRadius: 24,
          padding: 20,
          marginBottom: 14,
          fontWeight: 600,
        }}
      >
        🏋️ Gym at 7 PM
      </div>

      <div
        style={{
          background: '#E7C58A',
          borderRadius: 24,
          padding: 20,
          marginBottom: 14,
          fontWeight: 600,
        }}
      >
        🚀 Junior revision tomorrow
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          background: '#E7C58A',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,

          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',

          fontSize: 28,
        }}
      >
        <span>🔍</span>
        <span>🏠</span>
        <span>✨</span>
      </div>
    </main>
  );
}
