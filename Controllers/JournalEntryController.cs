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
                EntryId = 1,
                Date = "3:39pm",
                EntryBody = "Good morning world"
            }
        };

        return Ok(entries);
    }

}

