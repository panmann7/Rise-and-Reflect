using Microsoft.EntityFrameworkCore;
using JournalApp.Data;
using JournalApp.Entities;
using Microsoft.AspNetCore.Mvc;

namespace JournalApp.Controllers;

[ApiController]
[Route("/api/journal")]
public class JournalController : ControllerBase
{
    private readonly DataContext _context;

    public JournalController(DataContext context) {
        _context = context;

    }
    
    [HttpGet]
    public async Task<ActionResult<List<JournalEntry>>> GetAllEntries()
    {
         var entries = await _context.JournalEntries.ToListAsync();

        // var entries = new List<JournalEntry> {
        //     new JournalEntry {
        //         EntryId = 1,
        //         Date = "3:39pm",
        //         EntryBody = "Good morning world"
        //     }
        // };

        return Ok(entries);
    }

    [HttpGet("{EntryId}")]
    public async Task<ActionResult<JournalEntry>> GetEntry(int EntryId)
    {
        var entry = await _context.JournalEntries.FindAsync(EntryId);

        if (entry is null) 
                return NotFound("Entry not found.");

            // return BadRequest("Entry not found.");

        return Ok(entry);
    }


    [HttpPost]
    public async Task<ActionResult> AddEntry(JournalEntry entry)
    {
        _context.JournalEntries.Add(entry);
        await _context.SaveChangesAsync();

        return Created();
    }


    [HttpPut]
    public async Task<ActionResult<List<JournalEntry>>> UpdateEntry(JournalEntry updatedEntry)
    {
        // shouldn't actually return list - return msg like success, as database can be large
        var dbEntry = await _context.JournalEntries.FindAsync(updatedEntry.EntryId);

        if (dbEntry is null) 
                return NotFound("Entry not found.");

        dbEntry.Date = updatedEntry.Date;
        dbEntry.EntryBody = updatedEntry.EntryBody;

        await _context.SaveChangesAsync();

        return Ok(await _context.JournalEntries.ToListAsync());
    }



    [HttpDelete]
    public async Task<ActionResult<List<JournalEntry>>> DeleteEntry(int EntryId)
    {
        // shouldn't actually return list - return msg like success, as database can be large
        var dbEntry = await _context.JournalEntries.FindAsync(EntryId);

        if (dbEntry is null) 
                return NotFound("Entry not found.");

        _context.JournalEntries.Remove(dbEntry);
        await _context.SaveChangesAsync();

        return Ok(await _context.JournalEntries.ToListAsync());
    }




}

