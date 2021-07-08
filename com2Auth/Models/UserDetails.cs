using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace com2Auth.Models
{
    public class UserDetails
    {
        public string FirstName {get; set;}
        public string LastName { get; set; }
        public string Email { get; set; }
        public int PhoneNumber { get; set; }
        public string Password { get; set; }
    }
}
