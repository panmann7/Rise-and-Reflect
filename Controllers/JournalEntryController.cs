using JournalApp.Entities;
using Microsoft.AspNetCore.Mvc;

namespace JournalApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JournalEntryController : ControllerBase
{
    [HttpGet]

    public async Task<ActionResult<List<JournalEntry>>> GetAllEntries()
    {
        var entries = new List<JournalEntry> {
            new JournalEntry {
                Date = "05-02-2024",
                Time = "3:39pm",
                Entry = "Good morning world"
            }
        };

        return Ok(entries);
    }

}

