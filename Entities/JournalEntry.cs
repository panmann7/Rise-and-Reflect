using System.ComponentModel.DataAnnotations;

namespace JournalApp.Entities;

public class JournalEntry
{
    [Key]
    public int EntryId { get; set; }
    public string Date { get; set; } = string.Empty;
    public string EntryBody { get; set; } = string.Empty;
}
