// install or getting started.

npm install @radix-ui/react-popover@latest -E

//part two//

// index.jsx
import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger>More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content>
        Some more info…
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;

// adding styles//
// index.jsx
import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import './styles.css';

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent">
        Some content
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;  

// still on styles//

/* styles.css */
.PopoverTrigger {
  background-color: white;
  border-radius: 4px;
}

.PopoverContent {
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: white;
}

.PopoverArrow {
  fill: white;
}

//


