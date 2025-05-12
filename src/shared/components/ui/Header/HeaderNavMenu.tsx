import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/components/ui/kit/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../kit/avatar";
import { NavLink } from "react-router";
import { Switch } from "../kit/switch";

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
