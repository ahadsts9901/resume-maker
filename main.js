function CreateResume(event){

        {
            event.preventDefault()
        }

        // taking input from form

        let name =      document.getElementById('name').value
        let contact =   document.getElementById('contact').value
        let address =   document.getElementById('address').value
        let gmail =     document.getElementById('gmail').value
        let object =    document.getElementById('object').value

        let gender =            document.getElementById('gender').value
        let religion =          document.getElementById('religion').value
        let nationality =       document.getElementById('nationality').value
        let age =               document.getElementById('age').value
        let nic =               document.getElementById('nic').value
        let martialstatus =     document.getElementById('martialstatus').value

        let schooleducation =           document.getElementById('school-education').value
        let collegeeducation =          document.getElementById('college-education').value
        let professionaleducation =     document.getElementById('professional-education').value

        let skill1 =  document.getElementById('skill-1').value
        let skill2 =  document.getElementById('skill-2').value
        let skill3 =  document.getElementById('skill-3').value
        let skill4 =  document.getElementById('skill-4').value

        let experience1 =  document.getElementById('experience-1').value
        let experience2 =  document.getElementById('experience-2').value
        let experience3 =  document.getElementById('experience-3').value
        let experience4 =  document.getElementById('experience-4').value

        // show output in resume

        document.getElementById('name-r').innerHTML = name
        document.getElementById('contact-r').innerHTML = contact
        document.getElementById('address-r').innerHTML = address
        document.getElementById('gmail-r').innerHTML = gmail
        document.getElementById('object-r').innerHTML = object

        document.getElementById('gender-r').innerHTML = gender
        document.getElementById('religion-r').innerHTML = religion
        document.getElementById('nationality-r').innerHTML = nationality
        document.getElementById('age-r').innerHTML = age
        document.getElementById('nic-r').innerHTML = nic
        document.getElementById('martialstatus-r').innerHTML = martialstatus

        document.getElementById('school-education-r').innerHTML = schooleducation
        document.getElementById('college-education-r').innerHTML = collegeeducation
        document.getElementById('professional-education-r').innerHTML = professionaleducation

        document.getElementById('skill-1-r').innerHTML = skill1
        document.getElementById('skill-2-r').innerHTML = skill2
        document.getElementById('skill-3-r').innerHTML = skill3
        document.getElementById('skill-4-r').innerHTML = skill4

        document.getElementById('experience-1-r').innerHTML = experience1
        document.getElementById('experience-2-r').innerHTML = experience2
        document.getElementById('experience-3-r').innerHTML = experience3
        document.getElementById('experience-4-r').innerHTML = experience4

}