console.log("Jonas Class 101")
//Fundamental Part 1//
//linking JavaScript file Day 101 //
let JavaScript = 'amazing';
if (JavaScript === 'amazing' )alert("JavaScript is FUN");



// radix UI//

const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: 'black',
  borderRadius: '3px',
  padding: '5px'
});

const PopoverContent = styled(Popover.Content, {
  backgroundColor: 'white',
  boxShadow: '0 2px 10px -3px rgb(0 0 0 / 20%)',
  borderRadius: '3px',
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  boxShadow: '0 3px 15px -4px rgb(0 0 0 / 30%)',
  borderRadius: '5px',
});

// Compose a custom Tooltip component
export const StatusTooltip = ({ state, label }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Text>
          <Status variant={state} />
        </Text>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <TooltipContent>
          <Tooltip.Arrow />
          {label}
        </TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

// Compose a Popover with custom focus and positioning
export const DeploymentPopover = ({ children }) => {
  const popoverCloseButton = React.useRef(null);
  return (
    <Popover.Root>
      <Popover.Trigger>View deployment</Popover.Trigger>
      <Popover.Portal>
        <PopoverContent
          align="start"
          collisionPadding={10}
          onOpenAutoFocus={(event) => {
            // Focus the close button when popover opens
            popoverCloseButton.current?.focus();
            event.preventDefault();
          }}
        >
          {children}
          <Popover.Close ref={popoverCloseButton}>
            Close
          </Popover.Close>
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
};

// Compose a Dialog with custom focus management
export const InfoDialog = ({ children }) => {
  const dialogCloseButton = React.useRef(null);
  return (
    <Dialog.Root>
      <Dialog.Trigger>View details</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Portal>
        <DialogContent
          onOpenAutoFocus={(event) => {
            // Focus the close button when dialog opens
            dialogCloseButton.current?.focus();
            event.preventDefault();
          }}
        >
          {children}
          <Dialog.Close ref={dialogCloseButton}>
            Close
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
Transition to Radix Primitives

// END OF RADIX UI//

//Value (basically a Piece of data smallest unit of information on JS) AND variables//

//e.g 'San Wu' is a Value // // variables should be written in camel case or first_name (underscore)//

let firstName = "Yang Wu"
console.log(firstName); //should be able to print Yang Wu
console.log(firstName); //should be able to print Yang Wu
console.log(firstName); //should be able to print Yang Wu
//variable in underscore//
let last_name = "Ming Ya"
console.log(last_name)
//syntax Error = error in writting code i.e on variables i.e starting a variable name with a number//
//UNDERSTANDABLE NAMING OF VARIABLES//
let myFirstJob= 'Grave Digger';
let myCurrentJob = 'Senior Software Engineer';
//bad naming variables//
let job1 = 'gravedigger';
let job2 = 'SWE II';

console.log(myFirstJob); //print Grave Digger 

//Assigment Part 1
let country = "Canada";
let continent = "North America"
let population = "38.25 million"
console.log(country, continent, population)

//Data Types//

let reactDom = true;
console.log(reactDom);
console.log(typeof true);
//dynamic typing
reactDom = "No !";
console.log(reactDom);
//undefined data type// 
let age;
console.log(age);
console.log(typeof age); // U+1F480 fire 

//let con var//
/*let is used for variable that might change in future while cons is used for variables that won't change.
it is recommended to use const for clean code.NEVER USE VAR TO DECLARE VARIABLES.
*/

const dateOfBirth = 1945;
// userAge = 45;
console.log(dateOfBirth);

//const intialized//

/*Basic Operator in javascript */
// add (+), mutlipication (x) AND 
// Arithmetic operators
// Assignment operators.
// String operators.
// Comparison operators.
// Logical operators.
// Bitwise operators.
// Special operators.

🔥



// this code has some errors//
const now = 2023;
dateOfBirth= 1998;
const ageYang = now - dateOfBirth;
console.log(ageYang * 2);
