export const UserInformation = ({ userData }) => {
  return (
    <div>
      {userData.map((use) => {
        return (
          <>
            <h1 key={use.data.name}>Olá{use.data.name}</h1>
            <p key={use.data.course_module}>{use.data.course_module}</p>
          </>
        );
      })}
    </div>
  );
};
