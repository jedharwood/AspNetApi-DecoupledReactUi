using Xunit;
using AutoFixture;
using DotNetReactMicroBlog.Api.Models;
using DotNetReactMicroBlog.Api.Validators;
using DotNetReactMicroBlog.Api.UnitTests.Utilities;

namespace DotNetReactMicroBlog.Api.UnitTests.Validators
{
    public class NewArticleValidatorUnitTests
    {
        private readonly Fixture fixture;
        private readonly NewArticleValidator sut;
        private readonly RandomStringGenerator randomStringGenerator;

        public NewArticleValidatorUnitTests()
        {
            fixture = new Fixture();
            sut = new NewArticleValidator();
            randomStringGenerator = new RandomStringGenerator();
        }

        [Fact]
        public void Validate_WhenAuthorIdIsEmpty_ShouldBeInvalid()
        {
            // Arrange
            var request = fixture.Build<Article>().Without(r => r.AuthorId).Create();

            // Act
            var result = sut.Validate(request);

            // Assert
            Assert.False(result.IsValid);
            Assert.Equal("'Author Id' must not be empty.", result.Errors[0].ErrorMessage);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(-1)]
        public void Validate_WhenAuthorIdIsLessThan1_ShouldBeInvalid(int authorId)
        {
            // Arrange
            var request = fixture.Build<Article>().With(r => r.AuthorId, authorId).Create();

            // Act
            var result = sut.Validate(request);

            // Assert
            Assert.False(result.IsValid);
            Assert.Equal("'Author Id' must be greater than or equal to '1'.", result.Errors[0].ErrorMessage);
        }

        [Theory]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData((string)null)]
        public void Validate_WhenContentIsEmpty_ShouldBeInvalid(string content)
        {
            // Arrange
            var request = fixture.Build<Article>().With(r => r.Content, content).Create();

            // Act
            var result = sut.Validate(request);

            // Assert
            Assert.False(result.IsValid);
            Assert.Equal("'Content' must not be empty.", result.Errors[0].ErrorMessage);
        }

        [Fact]
        public void Validate_WhenContentIsLongerThan500Characters_ShouldBeInvalid()
        {
            // Arrange
            var length = 501;
            var gratuitousContent = randomStringGenerator.GenerateRandomString(length);
            var request = fixture.Build<Article>().With(r => r.Content, gratuitousContent).Create();

            // Act
            var result = sut.Validate(request);

            // Assert
            Assert.False(result.IsValid);
            Assert.Equal($"The length of 'Content' must be 500 characters or fewer. You entered {length} characters.", result.Errors[0].ErrorMessage);
        }

        [Theory]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData((string)null)]
        public void Validate_WhenSubtitleIsEmpty_ShouldBeInvalid(string content)
        {
            // Arrange
            var request = fixture.Build<Article>().With(r => r.Subtitle, content).Create();

            // Act
            var result = sut.Validate(request);

            // Assert
            Assert.False(result.IsValid);
            Assert.Equal("'Subtitle' must not be empty.", result.Errors[0].ErrorMessage);
        }

        [Fact]
        public void Validate_WhenSubtitleIsLongerThan100Characters_ShouldBeInvalid()
        {
            // Arrange
            var length = 101;
            var excessiveSubtitle = randomStringGenerator.GenerateRandomString(length);
            var request = fixture.Build<Article>().With(r => r.Subtitle, excessiveSubtitle).Create();

            // Act
            var result = sut.Validate(request);

            // Assert
            Assert.False(result.IsValid);
            Assert.Equal($"The length of 'Subtitle' must be 100 characters or fewer. You entered {length} characters.", result.Errors[0].ErrorMessage);
        }

        [Theory]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData((string)null)]
        public void Validate_WhenTitleIsEmpty_ShouldBeInvalid(string content)
        {
            // Arrange
            var request = fixture.Build<Article>().With(r => r.Title, content).Create();

            // Act
            var result = sut.Validate(request);

            // Assert
            Assert.False(result.IsValid);
            Assert.Equal("'Title' must not be empty.", result.Errors[0].ErrorMessage);
        }

        [Fact]
        public void Validate_WhenTitleIsLongerThan100Characters_ShouldBeInvalid()
        {
            // Arrange
            var length = 101;
            var excessiveTitle = randomStringGenerator.GenerateRandomString(length);
            var request = fixture.Build<Article>().With(r => r.Title, excessiveTitle).Create();

            // Act
            var result = sut.Validate(request);

            // Assert
            Assert.False(result.IsValid);
            Assert.Equal($"The length of 'Title' must be 100 characters or fewer. You entered {length} characters.", result.Errors[0].ErrorMessage);
        }
    }
}

