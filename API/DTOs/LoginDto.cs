using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class LoginDto
    {
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}