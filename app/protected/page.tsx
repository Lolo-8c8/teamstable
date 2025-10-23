import { auth, signOut } from 'app/auth';

export default async function ProtectedPage() {
  let session = await auth();

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        Du bist als {session?.user?.email} eingeloggt.
        <SignOut />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white', marginTop: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Sign out</button>
    </form>
  );
}
