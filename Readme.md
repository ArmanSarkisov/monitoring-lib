## how to use

### Copy and paste the script into the bottom of your <body> tag, but before you use any monitoring services:
<pre>
<script defer src="monitoring.js"></script>
<script>
  const monitoring = new Monitoring(yourAppId);
  monitoring.use(yourAppId);
</script>
</pre>
