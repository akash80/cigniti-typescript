export default function Center({children}:any) {
    return (
      <div
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          height: '20vh',
        }}
      >
        {children}
      </div>
    );
}