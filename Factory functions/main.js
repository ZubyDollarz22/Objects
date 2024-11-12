//A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.
const robotFactory = (model, mobile) => {
    return {
      model : model,
          mobile: mobile,
          beep () { 
        console.log('Beep Boop'); 
      }
      };
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();

  //property value shorthand
  const robotsFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotsFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  //Destructured assignment
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot;
  
  functionality.beep();