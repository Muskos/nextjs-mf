import dynamic from "next/dynamic";

const components = () => {
  const RemoteHeader = dynamic(() => import("next2/header"), {
    ssr: false,
  });

  return <RemoteHeader />
}

export default components