function UserProfile(props) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export default UserProfile;

//This only execute in the server after the deployment but its not statically pre-generated
//Good for the highly dynamic data (any pre-rendered page might be outdated)
export async function getServerSideProps(context) {
  const { params, req, res } = context; //incoming request and the respond

  return {
    props: {
      username: "Horace Yung",
    },
  };
  //no need to revalidate as it will always run again
}


