
if lein version
then
    :
else 
    echo -e "\ninstall lein "
    exit 1
fi

lein clean
lein fig:min
