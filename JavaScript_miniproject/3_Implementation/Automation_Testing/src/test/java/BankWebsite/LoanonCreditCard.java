package BankWebsite;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class LoanonCreditCard 
{
	public static void main(String args[]) throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Mahavir\\Downloads\\chromedriver_win32\\chromedriver.exe");
        WebDriver driver=new ChromeDriver();
        driver.get("file:///C:/Users/Mahavir/Downloads/JSandJasmineMiniProject-main/JSandJasmineMiniProject-main/JSMiniProject-main/JS/LoanonCreditCard.html");
        Thread.sleep(3000);
        driver.manage().window().maximize();
        Thread.sleep(3000);
        driver.findElement(By.name("name")).sendKeys("Harsha C.A");
        Thread.sleep(3000);
        driver.findElement(By.id("phone")).sendKeys("7996485901");
        Thread.sleep(3000);
        driver.findElement(By.name("card")).sendKeys("9874321685211234");
        Thread.sleep(3000);
        driver.findElement(By.id("password")).sendKeys("123456");
        Thread.sleep(3000);
        driver.findElement(By.xpath("/html/body/form/button")).click();
        Thread.sleep(3000);
	}
}
