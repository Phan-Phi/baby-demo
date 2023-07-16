import type { AppProps } from "next/app";
import { CacheProvider, type EmotionCache } from "@emotion/react";

import Setting from "@/contexts/Setting";
import { createEmotionCache } from "@/libs";
import { SWR, ThemeProvider } from "@/contexts";
import Layout from "@/compositions/Layout/Layout";
import { ErrorBoundaryWrapper, Head, Intl } from "@/hocs";

import "@/styles/global.css";
import SnackBar from "@/contexts/SnackBar";
import DeviceContext, { ColorModeContext } from "@/contexts/DeviceContext";
import { useContext } from "react";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: { initData: []; fallback: [] };
}

export default function App(props: MyAppProps) {
  const { emotionCache = clientSideEmotionCache, pageProps, Component } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head />
      <ThemeProvider>
        <Intl>
          <SnackBar>
            <ErrorBoundaryWrapper>
              <SWR fallback={pageProps.fallback}>
                <Setting>
                  <Layout>
                    <DeviceContext>
                      <Component {...pageProps} />
                    </DeviceContext>
                  </Layout>
                </Setting>
              </SWR>
            </ErrorBoundaryWrapper>
          </SnackBar>
        </Intl>
      </ThemeProvider>
    </CacheProvider>
  );
}
