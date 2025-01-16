"use client";

import { useMemo } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@nextui-org/react";

function MainDropdown({ options }) {
  const groupedOptions = useMemo(() => {
    return options.reduce((groups, option) => {
      const category = option.extraText || "Uncategorized";
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(option);
      return groups;
    }, {});
  }, [options]);

  return (
    <Autocomplete placeholder={"Select"} aria-label={"Select"}>
      {Object.entries(groupedOptions).map(([category, items]) => (
        <AutocompleteSection key={category} title={category}>
          {items.map(({ label, icon, id }) => (
            <AutocompleteItem
              key={id ? id?.toString() : label}
              startContent={icon && <span>{icon}</span>}
              value={id?.toString()}
              label={label}
              textValue={label}
            >
              {label}
            </AutocompleteItem>
          ))}
        </AutocompleteSection>
      ))}
    </Autocomplete>
  );
}

export default MainDropdown;
