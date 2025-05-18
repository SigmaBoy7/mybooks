import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/components/ui/kit/navigation-menu";
import { NavLink } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../shared/components/ui/kit/avatar";
import { Switch } from "../../../shared/components/ui/kit/switch";

export default function HeaderNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink to={"/"} className={navigationMenuTriggerStyle()}>
            Список к чтению
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to={"/"} className={navigationMenuTriggerStyle()}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Switch />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
