#ifndef _METHAN_H
#define _METHAN_H

#include <Arduino.h>

class Methan{
  private:
    int value;
    const float factor = 5.0;
  public:
    Methan ();
    virtual ~Methan ();
    float getValue();
};



#endif
