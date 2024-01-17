import type { LayoutProps } from '../../layout';

export type AppLayoutProps = LayoutProps & {};

export default function AppLayout({ children }: AppLayoutProps) {
	return <>{children}</>;
}
