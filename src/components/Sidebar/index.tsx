import Text from "components/Typography";
import { SidebarProps } from "interface/components.interface";
import React from "react";

const Sidebar : React.FC<SidebarProps> = ({data}) => {
  return (
    <aside>
      {
        data.map(item => {
          return (
            <li key={item.text}>
              <Text as='a' attrs={{
                href: item.link
              }}>{item.text}</Text>
            </li>
          )
        })
      }
    </aside>
  )
}

export default Sidebar