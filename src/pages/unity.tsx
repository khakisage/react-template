import { Unity, useUnityContext } from "react-unity-webgl";

function UnityPage() {
	const { unityProvider } = useUnityContext({
		loaderUrl: "Build/edu_build.loader.js",
		dataUrl: "Build/edu_build.data.br",
		frameworkUrl: "Build/edu_build.framework.js.br",
		codeUrl: "Build/edu_build.wasm.br",
	});

	return (
		<>
			<Unity
				unityProvider={unityProvider}
				style={{ width: 1000, height: 800 }}
			/>
		</>
	);
}

export default UnityPage;
