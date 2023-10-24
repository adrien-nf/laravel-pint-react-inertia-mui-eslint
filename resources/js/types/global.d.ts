import { AxiosInstance } from "axios";
import { Config, RouteName, RouteParams, Config as ZiggyConfig } from "ziggy-js";

type route<T extends RouteName> = (
	name: T,
	params?: RouteParams<T> | undefined,
	absolute?: boolean,
	config?: Config,
) => string;

declare global {
	interface Window {
		axios: AxiosInstance;
	}

	var route: route<RouteName>; // eslint-disable-line no-var
	var Ziggy: ZiggyConfig; // eslint-disable-line no-var
}
