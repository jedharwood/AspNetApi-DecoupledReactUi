using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DotNetReactMicroBlog.Api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    AuthorId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.AuthorId);
                });

            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    ArticleId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Subtitle = table.Column<string>(type: "text", nullable: true),
                    Content = table.Column<string>(type: "text", nullable: true),
                    AuthorId = table.Column<int>(type: "integer", nullable: false),
                    Created = table.Column<DateTime>(type: "timestamp without time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articles", x => x.ArticleId);
                    table.ForeignKey(
                        name: "FK_Articles_Authors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Authors",
                        principalColumn: "AuthorId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "AuthorId", "Name" },
                values: new object[] { 1, "Stewart Lee" });

            migrationBuilder.InsertData(
                table: "Articles",
                columns: new[] { "ArticleId", "AuthorId", "Content", "Created", "Subtitle", "Title" },
                values: new object[,]
                {
                    { 1, 1, "Morrissey fans have for years equated his more unpalatable pronouncements with the babblings of a beloved but out of touch relative. Some of the things Uncle Stephen says seem a bit racist, but he has seen a lot of changes in the area he lives in, he got food poisoning from a bad curry on the Bristol Road in 1978, and he says he couldn’t get on Top of the Pops in the 80s because he wasn’t black.", new DateTime(2022, 9, 25, 9, 46, 8, 429, DateTimeKind.Local).AddTicks(8160), "It’s hard when our idols disappoint us. But as it happened, my break from the former Smiths frontman came easily…", "How to treat Morrissey? Stop listening to him" },
                    { 2, 1, "Say “Cornwall” to an uncontacted pygmy brave deep in a New Zealand forest and his bamboo flute will swiftly carve the shape of the Cornish pasty into the Shotover riverbank sands. “Oggy, oggy, oggy,” he will cry, as he mimes pushing a too-hot Cornish pasty into his unambiguously delighted face. “Oggy, oggy, oggy!”", new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(710), "Without EU food protection rules, what’s to stop American producers faking our sacred baked goods?", "American Cornish pasties? Did King Arthur die for this?" },
                    { 3, 1, "At the beginning of the current decade I was often mistaken for the then North Korean dictator-in-waiting Kim Jong-un, which led to an embarrassing incident in a pet shop on Dalston High Road in February 2009. Needless to say, I was unable to convince the Polish lady behind the counter that I was merely looking for a canine companion for my elderly aunt, and did not in fact regard labradoodle puppies as a “superfood”.", new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(740), "The North Korean leader needs discipline; Donald Trump needs love. If only they could get together for a holiday of a lifetime", "Kim Jong-un’s happiness is just a great mini-break away" },
                    { 4, 1, "Paul Hollywood is named after a stupid place. And Mary Berry changed her surname to that of a popular cake ingredient in 1970, in a self-abasing quest for self-raising fame. We expect little moral guidance from either Hollywood or Berry, and we receive none in return.", new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(740), "The heroic Bake Off presenters will forever be remembered by today’s disenfranchised young people", "In Mel and Sue, the true spirit of punk lives on" },
                    { 5, 1, "In 1997 I looked into the pre-atomic age eyes of Harriet, the then 166-year-old Galápagos tortoise, in an Australian zoo, and saw myself reflected back, a traveller in time. And earlier this year, I looked into the pre-digital-age eyes of David Attenborough, on the platform of Oxford station, and saw myself reflected back, a traveller on the 11.59 to Paddington.", new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(750), "Do hard-shelled heroes now gaze upon Attenborough with sympathy, knowing that the landscape he once thrived in will be stripped away by the free market?", "Pity David Attenborough – the BBC’s Galápagos tortoise" },
                    { 6, 1, "It was the summer of 1984. I was 16. I wanted, finally, to see the Fall. I’d been fixated on the group since a 1981 Peel session suddenly flipped somehow from irritating me beyond reason to enthralling me beyond imagination. Provocative repetition. Monotonous drones. Withering sarcasm. I’m lucky I was struck by something so utterly superb when I was in my culturally vulnerable teenage state, otherwise you could be sitting here reading an article about Toto.", new DateTime(2022, 9, 25, 9, 46, 8, 440, DateTimeKind.Local).AddTicks(750), "I realise that the rest of my life, that can have such profound and disorientating pleasures in it, is going to be both wonderful and frightening", "The best gig I ever saw: Stewart Lee on the Fall, Cornwall, 1984" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Articles_AuthorId",
                table: "Articles",
                column: "AuthorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Articles");

            migrationBuilder.DropTable(
                name: "Authors");
        }
    }
}
